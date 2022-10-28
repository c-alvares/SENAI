import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#505050",
    alignItems: "center",
    justifyContent: "center",
  },
  containerHome: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#505050",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  containerHist: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#505050",
    alignItems: "center",
    
  },
  dog: {
    width: "50vw",
    height: "50vw",
    marginBottom: "10px",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  textInput: {
    width: "80%",
    height: "5%",
    borderRadius: "5px",
    margin: "10px",
    backgroundColor: "#EFEFEF",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    
  },
  conectar: {
    width: "80%",
    height: "5%",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    backgroundColor: "#8A66FA",
    
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Verdana",
    fontWeight: "bold",
  },
  frame: {
    width: "40vw",
    height: "40vw",
    marginTop: "20px",
    backgroundColor:"#FFFFFF",
    borderRadius: "20px",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    alignItems: "center",
    justifyContent: "center",

  },
  icon: {
    width: "13vw",
    height: "13vw",
    marginBottom: "9vw",
  },
  frameText: {
    fontFamily: "Verdana",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#8A66FA",
  },

  frame2: {
    widht: "40vw",
    height: "12%",
    borderRadius: "20px",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    justifyContent: "center",
  },
  frameText2: {
    color: "#FFFFFF",
    fontFamily: "Verdana",
    margin: "2px",
  },
});