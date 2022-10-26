import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e7ff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn1: {
    width: "100px",
    height: "50px",
    borderRadius: "100px",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    backgroundColor: "#2563eb"
  },
  textoBtn1: {
    fontWeight: "bold",
    fontSize: "17px",
    color: "#e0e7ff",
  },
  alternativas: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
  },
  previous: {
    width: "40px",
    height: "40px",
    margin: "10px",
  },
  next: {
    width: "40px",
    height: "40px",
    margin: "10px",
  },
  finish: {
    width: "40px",
    height: "40px",
    margin: "10px",
  },
  navegacao: {
    display: "flex",
    flexDirection: "row",
    margin: "20px",
  },
});
