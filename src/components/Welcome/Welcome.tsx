import { Text, WelcomeLink, Title, WelcomeWrap } from './Welcome.styled';

export function Welcome() {
  return (
    <WelcomeWrap>
      <Title>Stranger, welcome in our Contacts App</Title>
      <Text>
        Please log in to your account or create new one using the links below:
      </Text>
      <WelcomeLink to={'/login'}>Log IN</WelcomeLink>
      <WelcomeLink to={'/registry'}>Registry</WelcomeLink>
    </WelcomeWrap>
  );
}
