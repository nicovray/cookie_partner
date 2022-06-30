/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import Swal from "sweetalert2";
// import persona4 from "../assets/persona4.jpg";
// import persona1 from "../assets/persona1.jpg";
// import persona5 from "../assets/persona5.jpg";
// import persona3 from "../assets/persona3.jpg";
import portrait1 from "../assets/portrait1-rond.png";
import portrait2 from "../assets/portrait2-rond.png";
import portrait3 from "../assets/portrait3.-rond.png";
import "./Comments.css";

function Comments() {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Comment sent !",
      width: 600,
      padding: "3em",
      color: "#041678",
      background: "##C6EEB2 url(/images/trees.png)",
      backdrop: `
        rgba(0,0,0,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };
  return (
    <div className="commentsComponentContainer">
      <div className="interieurComment">
        <Comment.Group>
          <Header as="h3" dividing />
          <Comment>
            <Comment.Avatar src={portrait1} className="avatarContainer" />
            <Comment.Content>
              <Comment.Author as="a" style={{ color: "#041678" }}>
                Matt
              </Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                {/* <Comment.Action>Reply</Comment.Action> */}
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src={portrait2} className="avatarContainer" />
            <Comment.Content>
              <Comment.Author as="a" style={{ color: "#041678" }}>
                Elliot Fu
              </Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </Comment.Text>
              <Comment.Actions>
                {/* <Comment.Action>Reply</Comment.Action> */}
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src={portrait1} className="avatarContainer" />
                <Comment.Content>
                  <Comment.Author as="a" style={{ color: "#041678" }}>
                    Jenny Hess
                  </Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    {/* <Comment.Action>Reply</Comment.Action> */}
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src={portrait3} className="avatarContainer" />
            <Comment.Content>
              <Comment.Author as="a" style={{ color: "#041678" }}>
                Joe Henderson
              </Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                {/* <Comment.Action>Reply</Comment.Action> */}
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply className="replyContainer">
            <Form.TextArea />
            <Button
              className="buttonComment"
              content="Add comment"
              labelPosition="left"
              icon="edit"
              primary
              onClick={handleSubmit}
            />
          </Form>
        </Comment.Group>
      </div>
    </div>
  );
}

export default Comments;
