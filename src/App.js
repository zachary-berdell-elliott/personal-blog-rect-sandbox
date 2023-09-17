import logo from './logo.svg';
import './App.css';
import AddCommentBar from './components/AddCommentBar';
import DisplayedPost from './components/DisplayedPost';
import PostContainer from './components/PostContainer';
import EditPost from './pages/EditPost';
import Header from './components/Header'
import ReportedItem from './components/ReportedItem';
import PostComment from './components/PostComment';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="d-flex-column">
      <PostContainer />
      <AddCommentBar />
      <PostComment />
      <ReportedItem />
  </main>
      {/*<EditPost />*/}
      {/*<PostContainer />
      */}
    </div>
  );
}

export default App;
