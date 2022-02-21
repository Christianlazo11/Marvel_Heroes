import React from "react";

const CardHeroe = ({ title, img, id, urlDetails }) => {
  return (
    <>
      <div
        className="card col-6 col-sm-4 col-md-3 col-lg-2 border-0 bg-transparent"
        role="button"
        style={{ maxWidth: "18rem" }}
        data-bs-toggle="modal"
        data-bs-target={`#staticBackdrop${id}`}
      >
        <img
          className="rounded"
          src={img.path + "/portrait_xlarge." + img.extension}
          alt={title}
        />
        <div className="card-body mycard-body rounded">
          <h5 className="card-title text-white">{title}</h5>
        </div>
      </div>
      {/* Modal JSX ********************************/}
      <div
        className="modal fade"
        id={`staticBackdrop${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable ">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title text-white" id="staticBackdropLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close bg-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <img
                src={img.path + "/portrait_xlarge." + img.extension}
                alt={title}
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                <a
                  href={urlDetails}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Go to Oficial Page
                </a>
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHeroe;
