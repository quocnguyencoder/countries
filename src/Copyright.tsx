import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'©Countries '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
