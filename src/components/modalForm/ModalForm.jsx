import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../spinner/Spinner";
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
  SubmitButton,
} from "./Style";

const ModalForm = ({ isOpen, closeModal }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    foodname: '',
    price: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === 'file' ? event.target.files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const validateForm = () => {
      let isValid = true;
      const newErrors = {};

      if (!formData.foodname.trim()) {
        newErrors.foodname = "Food name is required";
        isValid = false;
        setLoading(false)
      }

      if (!formData.price.trim()) {
        newErrors.price = "Price is required";
        isValid = false;
        setLoading(false)
      }

      if (!formData.image) {
        newErrors.image = "File upload is required";
        isValid = false;
        setLoading(false)
      }

      setErrors(newErrors);
      return isValid;
    };

    if (!validateForm()) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const formDataToSend = new FormData();
      formDataToSend.append("foodname", formData.foodname);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("image", formData.image);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/menu`, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        setLoading(false)
        toast.success("Added Successfully");
      }

      // Reset form fields after successful submission
      setFormData({
        foodname: '',
        price: '',
        image: ''
      });
      setErrors({});
      // Close the modal after successful submission
    } catch (error) {
      setLoading(false)
      console.log(error);
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
                  value={formData.foodname}
                  onChange={handleChange}
                />
                {errors.foodname && <ErrorMsg>{errors.foodname}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Price:</Label>
                <Input
                  name="price"
                  value={formData.price}
                  type="number"
                  onChange={handleChange}
                />
                {errors.price && <ErrorMsg>{errors.price}</ErrorMsg>}
              </FormGroup>

              <FormGroup>
                <Label>Upload photo:</Label>
                <Input
                  name="image"
                  type="file"
                  onChange={handleChange}
                />
                {errors.image && <ErrorMsg>{errors.image}</ErrorMsg>}
              </FormGroup>
              {loading ? (
                <Spinner />
              ) : (
                <SubmitButton type="submit">Submit</SubmitButton>
              )}
            </Form>
            <ToastContainer position="top-right" autoClose={5000} />
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default ModalForm;
