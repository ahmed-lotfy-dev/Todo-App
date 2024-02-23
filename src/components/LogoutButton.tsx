import { logout } from "../actions/authActions";
import FormSubmit from "./formSubmitBtn";

type Props = {};

function LogoutButton({}: Props) {
  return (
    <form action={logout}>
      <FormSubmit btnText="Logout" />
    </form>
  );
}

export default LogoutButton