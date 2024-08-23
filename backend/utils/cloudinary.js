//get api and storage cloudinary

//storage
const storage = new CloudinaryStorage({
  params: {
    folder: "",
    resource_type: "image",
    public_id: (req, file) => "computed-filename-using-request",
  },
});
const parser = multer({ storage: storage });
module.exports = {
  cloudinary,
  parser,
};
