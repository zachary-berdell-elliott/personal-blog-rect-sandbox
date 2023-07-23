import logo from './logo.svg';
import './App.css';
import AddCommentBar from './components/AddCommentBar';
import DisplayedPost from './components/DisplayedPost';
import PostContainer from './components/PostContainer';
import EditPost from './pages/EditPost';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <EditPost />
      {/*<PostContainer />
      */}
    </div>
  );
}

export default App;
