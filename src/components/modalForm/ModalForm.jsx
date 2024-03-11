import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  StyledIcon,
  ModalWrapper,
  ModalContent,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMsg,
  SubmitButton
}
from "./Style"



const ModalForm = ({ isOpen, closeModal}) => {
  const [foodname, setFoodname] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};

      if (!foodname.trim()) {
        newErrors.foodname = "Food name is required";
        isValid = false;
      }

      if (!price.trim()) {
        newErrors.price = "Price is required";
        isValid = false;
      }

      if (!image) {
        newErrors.image = "File upload is required";
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    if (!validateForm()) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('foodname', foodname);
      formData.append('price', price);
      formData.append('image', image);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/menu`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json, text/plain, */*",
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",

          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        toast.success("Added Successfully");
      }

      // Reset form fields after successful submission
      setFoodname("");
      setPrice("");
      setImage(null);
      setErrors({});
      closeModal();
    // Close the modal after successful submission
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <ModalContent>
            <StyledIcon icon={faClose} onClick={closeModal} />
            <h2>Add Food Form</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Food Name:</Label>
                <Input
                  name="foodname"
                  type="text"
                  value={foodname}
                  onChange={(e) => setFoodname(e.target.value)}
                />
                {errors.foodname && <ErrorMsg>{errors.foodname}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Price:</Label>
                <Input
                  name="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Upload photo:</Label>
                <Input
                  name="image"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {errors.image && <ErrorMsg>{errors.image}</ErrorMsg>}
              </FormGroup>

              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
            <ToastContainer position="top-right" autoClose={5000} />
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default ModalForm;
