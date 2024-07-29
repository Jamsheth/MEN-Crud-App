export const fetch = async (req, res) => {
  try {
    res.send("Hii I am Jammu")

  } catch (error){
    res.status(500)
    res.send("Error")
  }
};
