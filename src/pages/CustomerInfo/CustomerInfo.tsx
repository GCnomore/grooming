import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AppointmentLayout from "../../components/AppointmentLayout/AppointmentLayout";
import LabelInput from "../../components/LabelInput/LabelInput";

import Layout from "../../components/Layout/Layout";
import { RootState, setCustomer } from "../../data/redux/appointmentSlice";
import { RootDispatch } from "../../data/redux/store";
import * as Styled from "./CustomerInfo.styled";

const CustomerInfo: React.FC = () => {
  const dispatch = useDispatch<RootDispatch>();
  const { customer } = useSelector((state: RootState) => state);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const handleNext = () => {
    trigger();
    console.log("trigerrrr");
  };

  useEffect(() => {
    console.log("eeeeee", customer);
  }, [customer]);

  return (
    <Layout>
      <AppointmentLayout btnAction={handleNext} show={true}>
        <Styled.Container>
          <Styled.PageTitleContainer>
            <h2>Customer information</h2>
          </Styled.PageTitleContainer>
          <form
            id="hook-form"
            onSubmit={handleSubmit((data) => dispatch(setCustomer(data)))}
          >
            <Styled.NameSection>
              <LabelInput
                label="*First Name"
                error={errors.firstName && "* This field is required"}
              >
                <input
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                  name="firstName"
                />
              </LabelInput>
              <LabelInput
                label="*Last Name"
                error={errors.lastName && "* This field is required"}
              >
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                  name="lastName"
                />
              </LabelInput>
            </Styled.NameSection>

            <Styled.AddressSection>
              <div>
                <LabelInput
                  label="*Street Address"
                  error={errors.streetAddr && "* This field is required"}
                >
                  <input
                    {...register("streetAddr", { required: true })}
                    placeholder="Street Address"
                    name="streetAddr"
                  />
                </LabelInput>
              </div>
              <div>
                <LabelInput
                  label="*City"
                  error={errors.city && "* This field is required"}
                >
                  <input
                    {...register("city", { required: true })}
                    placeholder="City"
                    name="city"
                  />
                </LabelInput>
                <LabelInput
                  label="*State"
                  error={errors.state && "* This field is required"}
                >
                  <input
                    {...register("state", { required: true })}
                    placeholder="State"
                    name="state"
                  />
                </LabelInput>
                <LabelInput
                  label="*Zip Code"
                  error={errors.zipCode && "* This field is required"}
                >
                  <input
                    {...register("zipCode", { required: true })}
                    placeholder="Zip Code"
                    name="zipCode"
                  />
                </LabelInput>
              </div>
            </Styled.AddressSection>

            <Styled.ContactSection>
              <LabelInput
                label="*Phone Number"
                error={errors.phone && "* This field is required"}
              >
                <input
                  {...register("phone", {
                    required: true,
                    pattern:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                  })}
                  placeholder="Phone Number"
                  name="phone"
                />
              </LabelInput>
              <LabelInput
                label="*Email Address"
                error={
                  errors.email?.type === "required"
                    ? "* This field is required"
                    : errors.email?.type === "pattern"
                    ? "* Please enter valid email address"
                    : ""
                }
              >
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  placeholder="Email Address"
                  name="email"
                />
              </LabelInput>
            </Styled.ContactSection>

            <Styled.EmergencyContactSection>
              <LabelInput
                label="*Emergency Contact Name"
                error={
                  errors.emergencyContactName && "* This field is required"
                }
              >
                <input
                  {...register("emergencyContactName", { required: true })}
                  placeholder="Emergency Contact Name"
                  name="emergencyContactName"
                />
              </LabelInput>
              <LabelInput
                label="*Emergency Contact Phone Number"
                error={
                  errors.emergencyContactPhone && "* This field is required"
                }
              >
                <input
                  {...register("emergencyContactPhone", { required: true })}
                  placeholder="Emergency Contact Phone Number"
                  name="emergencyContactPhone"
                />
              </LabelInput>
            </Styled.EmergencyContactSection>
            <Styled.ContactMethodSection>
              <p>How should we contact you?</p>
              <div>
                <div>
                  <p>Phone</p>
                  <input
                    {...register("preferredContactMethod", { required: true })}
                    type="checkbox"
                    defaultChecked={true}
                  />
                </div>
                <div>
                  <p>Text Message</p>
                  <input
                    {...register("preferredContactMethod", { required: true })}
                    type="checkbox"
                    defaultChecked={false}
                  />
                </div>
              </div>
            </Styled.ContactMethodSection>
          </form>
        </Styled.Container>
      </AppointmentLayout>
    </Layout>
  );
};

export default CustomerInfo;
