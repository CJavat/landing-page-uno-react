import "./App.css";
import Input from "./components/Input";
import CheckBox from "./components/CheckBox";
import Button from "./components/Button";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="contenedor-principal">
      <h2 className="titulo"> Sign Up </h2>
      <div className="contenedor-inputs">
        <div className="inputs-nombre">
          <Input
            clase="nombre"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
          />
          <Input
            clase="nombre"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <Input
          clase="input"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <Input
          clase="input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <Input
          clase="input"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <CheckBox />
        <Button />
      </div>
      <div className="contenedor-signin">
        <SignIn />
      </div>
    </div>
  );
}

export default App;
