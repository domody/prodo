import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-screen items-center justify-center border-t border-dark-400 py-16">
      <div className="flex w-full max-w-container flex-col items-start justify-center px-8 lg:flex-col-reverse lg:px-0">
        <div className="w-full text-dark-300 lg:mt-32 lg:w-3/5 ">
          <div className="col-span-2 flex h-full w-full flex-col items-start justify-between text-right lg:text-left">
            <p className="w-full text-base font-medium text-dark-50">
              ProDo · The Future of Team Workspaces
            </p>
            <p className="mt-4 w-full text-base">
              Follow us on social media, subscribe to our newsletter, and join
              our community to stay updated on the latest features and tips to
              get the most out of TeamWorkspace.
            </p>
          </div>
        </div>
        <div className="mt-16 grid w-full grid-cols-5 gap-y-8 text-sm font-medium text-dark-400 lg:mt-0">
          <div className="flex w-full flex-col items-start justify-start space-y-4">
            <p className="text-base font-semibold text-dark-100">Title here</p>
            <div className="flex w-full flex-col items-start justify-start space-y-2">
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start space-y-4">
            <p className="text-base font-semibold text-dark-100">Title here</p>
            <div className="flex w-full flex-col items-start justify-start space-y-2">
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
            </div>
          </div>{" "}
          <div className="flex w-full flex-col items-start justify-start space-y-4">
            <p className="text-base font-semibold text-dark-100">Title here</p>
            <div className="flex w-full flex-col items-start justify-start space-y-2">
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
            </div>
          </div>{" "}
          <div className="flex w-full flex-col items-start justify-start space-y-4">
            <p className="text-base font-semibold text-dark-100">Title here</p>
            <div className="flex w-full flex-col items-start justify-start space-y-2">
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start space-y-4">
            <p className="text-base font-semibold text-dark-100">Title here</p>
            <div className="flex w-full flex-col items-start justify-start space-y-2">
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
              <a href="">Link text</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
