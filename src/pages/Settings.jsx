import { Header } from "../components/Header";
import "./Settings.css";

export default function Settings() {
  return (
    <>
      <Header title="Ajustes" isNotBoardsSection={true} />
      <main className="settings-content"></main>
    </>
  );
}
