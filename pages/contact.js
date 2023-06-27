import Center from "@/components/Center";
import FormEmails from "@/components/FormEmails";
import Header from "@/components/Header";
import React from "react";

const ContacPage = () => {
  return (
    <>
      <Header />
      <Center>
        <div>
          <div>
            <h3>Contact Info</h3>
            <div>
              <div>Icon</div>
              <div>
                <span>Mail us</span>
                <h4>example@test.com</h4>
                <h4>example2@test.com</h4>
              </div>
            </div>
            <div>
              <div>Icon</div>
              <div>
                <span>Contact us</span>
                <h4>example@test.com</h4>
                <h4>example2@test.com</h4>
              </div>
            </div>
            <div>
              <div>Icon</div>
              <div>
                <span>Location</span>
                <h4>example@test.com</h4>
                <h4>example2@test.com</h4>
              </div>
            </div>
            <h3>Social info</h3>
            <div>
              <div>LinkedIn</div>
              <div>Twiter</div>
              <div>Instagram</div>
            </div>
          </div>
          <FormEmails />
        </div>
      </Center>
    </>
  );
};

export default ContacPage;
