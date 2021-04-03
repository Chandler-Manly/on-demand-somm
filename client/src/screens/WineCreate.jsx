// Source for content credited to WSET Systematic Approach to Tasting (SAT)
import Layout from '../layouts/Layout'
import Parent from '../components/Parent';

export default function WineCreate(props) {

  return (
    <Layout user={props.user}>
    <div>
      <Parent user={props.user}/>
      </div>
      </Layout>
    
  );
}
