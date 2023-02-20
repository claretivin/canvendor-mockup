import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { borderRadius, padding } from "@mui/system";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2 col-md-2 col-sm-2">Self Help</div>
          <div className="col-12 col-lg-10 col-md-2 col-sm-10">
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7cba89 , #f1972c,#d54831)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                width: "700px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
            </Card>
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7cba89 , #f1972c,#d54831)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "700px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Simple Exercises
              </Typography>
            </Card>
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #f1972c,#d54831)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "500px",
                marginLeft: "200px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Walking Aid / Simple Pain Killers
              </Typography>
            </Card>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "20px",
          }}
        >
          <div className="col-12 col-lg-2 col-md-2 col-sm-2">Non OPerative</div>
          <div className="col-12 col-lg-10 col-md-2 col-sm-10">
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7cba89 , #f1972c, #d54831, #813a4f)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>{" "}
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f1972c, #d54831, #813a4f)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "700px",
                marginLeft: "375px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f1972c, #d54831, #813a4f)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "500px",
                marginLeft: "375px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "20px",
          }}
        >
          <div className="col-12 col-lg-2 col-md-2 col-sm-2">All</div>
          <div className="col-12 col-lg-10 col-md-2 col-sm-10">
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #f1972c, #d54831)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "400px",
                marginLeft: "375px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #d54831, #813a4f)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "300px",
                marginLeft: "570px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #d54831, #813a4f)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "300px",
                marginLeft: "570px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #7cba89 , #f1972c)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "300px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
            </Card>
            <Card
              style={{
                background: " #f1972c",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "300px",
                marginLeft: "110px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
            </Card>
            <Card
              style={{
                background: " #f1972c",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                width: "300px",
                marginLeft: "110px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
            </Card>
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7cba89 , #f1972c, #d54831, #813a4f)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "20px",
          }}
        >
          <div className="col-12 col-lg-2 col-md-2 col-sm-2">Observation</div>
          <div className="col-12 col-lg-10 col-md-2 col-sm-10">
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7cba89 , #f1972c, #d54831, #813a4f)",
                borderRadius: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
              sx={{ minWidth: 275 }}
            >
              <Typography
                style={{
                  color: "black",
                  textAlign: "left",
                  background: "white",
                  width: "fit-content",
                  padding: "5px",
                  borderRadius: "20px",
                  height: "30px",
                }}
                sx={{ fontSize: 14 }}
                // color="text.secondary"
                gutterBottom
              >
                Wellbeing
              </Typography>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
