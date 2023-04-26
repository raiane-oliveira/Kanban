import { Header } from "../components/Header";
import "./Profile.css";
import { Box } from "../components/Box";
import { useBoard } from "../context/ContextBoard";
import { CaretRight } from "@phosphor-icons/react";

export default function Profile() {
  const { user } = useBoard();
  return (
    <>
      <Header title="Perfil" />
      <main className="profile-content">
        <h2 className="section-user">Dados Pessoais</h2>
        <div className="personal-data-profile">
          <Box label="Nome" className="name-profile">
            {user.first_name} {user.last_name}
          </Box>

          <Box label="Nome de usuário" className="username-profile">
            {user.username}
          </Box>

          <Box label="E-mail" className="email-profile">
            {user.email}
          </Box>

          <Box label="Data de nascimento" className="date-birth-profile">
            {user.date_of_birth.replaceAll("-", "/")}
          </Box>

          <Box label="Número de Telefone" className="phone-profile">
            {user.phone_number}
          </Box>

          <Box className="password-profile">
            <button className="btn-settings-profile" type="button">
              Alterar senha <CaretRight />
            </button>
          </Box>
        </div>

        <h2 className="section-user susbcription-user">Assinatura</h2>
        <div className="subscription-data-profile">
          <Box label="Tipo de plano" className="plan-profile">
            {user.subscription.plan} - {user.subscription.term}
          </Box>
          <Box label="Método de pagamento" className="payment-method-profile">
            {user.subscription.payment_method}
          </Box>

          <Box className="change-subscription-profile">
            <button className="btn-settings-profile" type="button">
              Alterar assinatura <CaretRight />
            </button>
          </Box>
        </div>
      </main>
    </>
  );
}
