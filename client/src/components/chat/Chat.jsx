import "./Chat.scss";

function Chat() {
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </p>
        </div>
      </div>

      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <span className="close">X</span>
        </div>
        <div className="center">
          <div className="chatMessage own">
            <p>lorem ipsum ijifigig</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>lorem ipsum ijifigig</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem ipsum ijifigig</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>lorem ipsum ijifigig</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem ipsum ijifigig</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>lorem ipsum ijifigig</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea name="" id=""></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
