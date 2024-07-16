
import './App.css';
import Tenthform from './classes/Tenthform';

function App() {


  let tenth=new Tenthform();
  tenth.engMarks=98;
  tenth.telMarks=97;
  tenth.hindiMarks=96;
  tenth.matMarks=95;
  tenth.sciMarks=94;
  tenth.socMarks=93;
  tenth.calculateResult();
  console.log(Tenthform.passMarks);
  Tenthform.regardingTenth();

  
  let playersOfIndianCricketTeam=["Rohit Sharma","Virat Kohli","Bumrah","Jadeja","Ashwin","Shami","Siraj","KL Rahul","Shubman Gill","Hardik Pandya","Suryakumar Yadav","Rishab Pant","Kuldeep Yadav","Axar Patel","Yashasvi Jaiswal","Rinku Singh","Tilak Verma","Ruturaj Gaikwad","Shardul Thakur","Shivam Dube","Ravi Bishnoi"]

  return (
    <div className="App">
      <h1>Learning Array Methods</h1>
      <button onClick={()=>{ 
      console.log(playersOfIndianCricketTeam.length);
      for(let i=0;i<playersOfIndianCricketTeam.length;i++){ console.log(playersOfIndianCricketTeam[i]);}


      // console.log(playersOfIndianCricketTeam[0]);
      // console.log(playersOfIndianCricketTeam[1]);
      // console.log(playersOfIndianCricketTeam[2]);
      // console.log(playersOfIndianCricketTeam[3]);
      // console.log(playersOfIndianCricketTeam[4]);
      // console.log(playersOfIndianCricketTeam[5]);
      // console.log(playersOfIndianCricketTeam[6]);
      // console.log(playersOfIndianCricketTeam[7]);
      // console.log(playersOfIndianCricketTeam[8]);
      // console.log(playersOfIndianCricketTeam[9]);
      // console.log(playersOfIndianCricketTeam[10]);
      // console.log(playersOfIndianCricketTeam[11]);
      // console.log(playersOfIndianCricketTeam[12]);
      // console.log(playersOfIndianCricketTeam[13]);
      // console.log(playersOfIndianCricketTeam[14]);
      // console.log(playersOfIndianCricketTeam[15]);
      // console.log(playersOfIndianCricketTeam[16]);
      // console.log(playersOfIndianCricketTeam[17]);
      
      }}>Length</button>
      <button onClick={()=>{
        console.log(playersOfIndianCricketTeam[11]);
          console.log(playersOfIndianCricketTeam.at(11)
        )
      }}>At</button>
      <button onClick={()=>{
      console.log(playersOfIndianCricketTeam);
      console.log(playersOfIndianCricketTeam.toString());
      console.log(playersOfIndianCricketTeam.join("/"));
      }}> To string,Join</button>
      
      <button onClick={()=>{
        playersOfIndianCricketTeam.push("Sanju Samson");
        console.log(playersOfIndianCricketTeam);
      }}>Push</button>
      <button onClick={()=>{
       console.log(playersOfIndianCricketTeam);
       playersOfIndianCricketTeam.pop();
       console.log(playersOfIndianCricketTeam);
      }}>POP</button>
      <button onClick={()=>{
      console.log(playersOfIndianCricketTeam); 
      playersOfIndianCricketTeam.shift();
      console.log(playersOfIndianCricketTeam);
      }}>Shift</button>
      <button onClick={()=>{
      console.log(playersOfIndianCricketTeam); 
      playersOfIndianCricketTeam.unshift("Dhoni");
      console.log(playersOfIndianCricketTeam);
      }}>Unshift</button>
      <button onClick={()=>{
      console.log(playersOfIndianCricketTeam); 
      // playersOfIndianCricketTeam.splice(2,2);
      playersOfIndianCricketTeam.splice(18,0,"Rajat Patidar","Sarfaraz Khan");
      console.log(playersOfIndianCricketTeam); 
      }}>Splice</button>
      <button onClick={()=>{}}></button>
      <button onClick={()=>{}}></button>

    </div>
  );
}

export default App;
