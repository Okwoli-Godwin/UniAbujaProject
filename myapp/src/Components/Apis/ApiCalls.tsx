import axios from "axios";
import { AdminData } from "./Allinterfaces";

export const url = "https://cur-uni-abuja.onrender.com/app";

export const createAdmin = async (data: any) => {
  return await axios
    .post(`https://cur-uni-abuja.onrender.com/app/register`, data)
    .then((res) => res.data)
    .catch((error) => error);
};

//login Admin
export const LoginAdmin = async (data: AdminData) => {
  return await axios
    .post(`${url}/login`, data)
    .then((res) => res.data)
    .catch((res) => res);
};

export const ReadData = async () => {
  return await axios
    .get("https://cur-uni-abuja.onrender.com/app/image/getall")
    .then((res) => res.data)
    .catch((err) => err);
};

export const ReadImage = async () => {
  return await axios
    .get("https://cur-uni-abuja.onrender.com/app/gallery/getall")
    .then((res) => res.data)
    .catch((err) => err);
};

export const postText = async (data: any) => {
  return await axios
    .post("https://cur-uni-abuja.onrender.com/app/text/post")
    .then((res) => res.data)
    .catch((error) => error);
};

export const updateText = async ({ writeups, button }: any) => {
  return await axios
    .patch(
      "https://cur-uni-abuja.onrender.com/app/text/update/6499886d8728214477f96989",
      {
        writeups,
        button,
      }
    )
    .then((res) => res.data)
    .catch((error) => error);
};
export const ReadText = async () => {
  return await axios
    .get(`https://cur-uni-abuja.onrender.com/app/text/gettext`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const deleteData = async (id: any) => {
  return await axios
    .delete(`https://cur-uni-abuja.onrender.com/app/image/delete/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
  // Swal.fire({
  //   icon: "success",
  //   title: "Image deleted",
  //   timer: 3000,
  // });
};
