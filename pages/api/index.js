export default (req, res) => {
  const APISecret = process.env.APISecret
  console.log(APISecret ? 'defined':'undefined')
  res.json({APISecret})
}
