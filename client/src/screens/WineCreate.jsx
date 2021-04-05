// Source for content credited to WSET Systematic Approach to Tasting (SAT)
import Parent from '../components/Parent';
import Layout from '../layouts/Layout';
export default function WineCreate(props) {

  return (
    <Layout user={props.user} backgroundColor={"#84a59d"}>
    <div>
      <Parent user={props.user}/>
      </div>
      </Layout>

  );
}
