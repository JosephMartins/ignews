import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import styles from './styles.module.scss';
import {signIn, useSession} from 'next-auth/client';

export function SignInButton() {

  const [ session ] = useSession();
  console.log(session)

  return session ? (
    <button 
      type="button"
      className={styles.signInBUtton}
    > 
      <FaGithub color="#04d321" /> 
      Joseph Martins 
      <FiX color="#737380"  className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInBUtton}
      onClick={() => signIn()}
    > 
      <FaGithub color="#eba417" /> 
      Sign in with GitHub
    </button>
  )
}