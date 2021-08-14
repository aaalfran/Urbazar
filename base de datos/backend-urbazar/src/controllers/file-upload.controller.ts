// Uncomment these imports to begin using these cool features!
// ../../uploads/products/
import {inject} from '@loopback/core';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings,
} from '@loopback/rest';
import path from 'path';
import multer from 'multer'
export class FileUploadController {
  constructor() {}

  @post('/upload',{
    responses :{
      200 : {
        content: {
          'application/json':{
            schema:{
              type: 'object',
            }
          }
        }
      }
    }
  })
  async fileUpload(
    @requestBody.file()
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    const imgpath = path.join(__dirname, '../../public/products/')
    let res = await this.StoreFileToPath(imgpath,'file',request,response)
    if(res){
      const filename = response.req?.file?.filename;
      return {filename:filename}
    }
    return res;
  }

  
  private GetMulterStorageConfig(path: string){
    let filename: string  = '';
    const storage = multer.diskStorage(
      {
        destination: function(req,file,cb){
          cb(null,path)
        },
        filename: function(req,file,cb){
          filename = `${Date.now()}-${file.originalname}`
          cb(null,filename)
        }
      }
    )
    return storage;
  }
  private StoreFileToPath(storePath: string,fieldname:string,request:Request,response:Response){
    return new Promise<object>((resolve, reject) => {
      const storage = this.GetMulterStorageConfig(storePath);
      const upload = multer({
        storage:storage,
      }).single(fieldname);
      upload(request,response,(err:any) => {
        if(err){
          reject(err)
        }
        resolve(response)
      });
    });
  }
}
