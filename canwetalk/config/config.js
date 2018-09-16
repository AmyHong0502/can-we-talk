let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = "mongodb://teddy:lumohacksteddy2018@ds119702.mlab.com:19702/canwetalk"
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = "mongodb://localhost:27017/CanWeTalkTest"
}