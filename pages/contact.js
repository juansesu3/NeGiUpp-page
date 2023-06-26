import Center from "@/components/Center";
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

          <div>
            <h1>Lets work together</h1>
            <form>
              <input type="text" placeholder="Name *" />
              <input type="mail" placeholder="Email *" />
              <input type="text" placeholder="Your Subject *" />
              <textarea placeholder="Your Menssage*"></textarea>
              <button>Send Message</button>
            </form>
            Form Email
          </div>
        </div>
      </Center>
    </>
  );
};

export default ContacPage;
