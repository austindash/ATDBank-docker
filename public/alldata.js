const {response} = require("express");

function AllData(){
  //get data
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    // fetch all accounts from api
    fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));
         });
  }, []);

  return (
    <Card
      txtcolor="black"
      header="All Data"
      title="All Users in Store:"
      text=" "
      id="demo"
      body={<>
      <br/> ALL USERS: <br/>
            <br/>
            {data}
            <br/>
           
      </>}
    />    
  );  
}
