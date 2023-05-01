import logo from './logo.svg';
import './App.css';
import AddCommentBar from './components/AddCommentBar';
import DisplayedPost from './components/DisplayedPost';
import PostContainer from './components/PostContainer';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <PostContainer />
    </div>
  );
}

export default App;
