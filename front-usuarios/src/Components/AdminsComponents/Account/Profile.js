import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core'

const user = {
  avatar: '/static/media/bryan.fa8c2fdf.jpeg',
  city: 'Guayaquil',
  country: 'Ecuador',
  jobTitle: 'Senior Developer',
  name: 'Walther Lopez'
}

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}))

const Profile = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <Card

    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
           03:59 AM GTM-5
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Actualizar foto
        </Button>
      </CardActions>
    </Card>
  )
}

Profile.propTypes = {
  className: PropTypes.string
}

export default Profile
