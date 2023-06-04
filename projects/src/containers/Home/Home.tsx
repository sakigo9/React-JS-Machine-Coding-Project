import "./Home.css"
const Home:React.FC = () => {
  return (
    <div className="main_container">
        <div className="navbar">
            <div className="navbar_tab">Problems</div>
            <div className="navbar_tab">Concepts</div>
        </div>
        <div className="tasks">
            <div className="task_card"></div>
        </div>
    </div>
  )
}

export default Home