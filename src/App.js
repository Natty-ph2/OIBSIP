import { useReducer } from "react";
import "./style.css" 
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digitt',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  ANSWER: 'ans',
  EVALUATE: 'evaluate'

 }


 const int_formater = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
 })

 function formatOperand(operand) {
  if(operand == null) return
  const [integer, decimal] = operand.split(".")
  if(decimal == null) return int_formater.format(integer)
  return `${int_formater.format(integer)}.${decimal}`
 }

function reducer(state, {type, payload}) {

  switch(type) {
    case ACTIONS.ADD_DIGIT: 
    if(state.overwrite) {
      return {
        ...state,
        firstOperand: payload.digit,
        overwrite: false
      }
    }
    if(payload.digit === "0" && state.firstOperand === "0"){
      return state
    } 
    if(payload.digit === "." && state.firstOperand.includes(".")) {
      return state
    }

    if (payload.digit === "√" && state.firstOperand !== null) {
      const squareRootValue = Math.sqrt(parseFloat(state.secondOperand));
      return {
        ...state,
        firstOperand: squareRootValue.toString(),
        overwrite: true,
      };
    }
    
    
    
    return {
      ...state,
      firstOperand: `${state.firstOperand || ""}${payload.digit}`  
    }

    case ACTIONS.CHOOSE_OPERATION:
      if(state.firstOperand == null && state.secondOperand == null){
        return state
      }

     

      if(state.firstOperand == null) {
        return {
          ...state,
          operation:payload.operation,
        }
      }
      if(state.secondOperand == null) {
        return {
          ...state, 
          operation: payload.operation,
          secondOperand: state.firstOperand,
          firstOperand: null
          
        }
      }

      return {
        ...state,
        secondOperand: evaluate(state),
        operation: payload.operation,
        firstOperand: null
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite){
        return {
          ...state,
          overwrite: false,
          firstOperand: null
        }
      }

      if(state.firstOperand == null) return state
      if(state.firstOperand.length === 1) {
        return {
          ...state, firstOperand: null
        }
      }

      return {
        ...state,
        firstOperand: state.firstOperand.slice(0, -1)
      }
    case ACTIONS.EVALUATE:
      if(
        state.operation == null || 
        state.firstOperand == null ||
        state.secondOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        secondOperand: null,
        operation: null,
        firstOperand: evaluate(state),
      }
  }

}

function evaluate({firstOperand, secondOperand, operation}) {
  if(firstOperand === "√") {
    Math.sqrt(secondOperand);
  }
  const first = parseFloat(firstOperand);
  const second = parseFloat(secondOperand);
  
  if(isNaN(first) || isNaN(second)) return ""
  let computation = ""
  switch(operation) {
    case "+":
      computation = second + first
      break
    case "-":
      computation = second - first
      break
    case "*":
      computation = second * first
      break
    case "÷":
      computation = second / first
      break
    // case "√":
    //   computation = Math.sqrt(first)
    //   break
    case "%":
      computation = firstOperand / 100
      break
  }

  return computation.toString()
}


function App() {

  const[{firstOperand, secondOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calc-bg">
    <div className="calc-container">
      <div className="result">
        <div className="secondOperand">{formatOperand(secondOperand)} {operation}</div>
        <div className="firstOperand">{formatOperand(firstOperand)}  </div>
        
      </div>
      
      <OperationButton operation="(" dispatch={dispatch} />
      <OperationButton operation=")" dispatch={dispatch} />
      <button  onClick={() => dispatch({type: ACTIONS.EVALUATE})}>ans</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>del</button>
      <button onClick={() => dispatch({ type: ACTIONS.CLEAR}) } >clear</button>
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="%" dispatch={dispatch} />
      <OperationButton operation="√" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <OperationButton operation="±" dispatch={dispatch} />
      <button className="spanTwo"
      onClick={() => dispatch({type: ACTIONS.EVALUATE})}
      >
        ENTER
      </button>
    </div>
  </div>
  );
}

export default App;

