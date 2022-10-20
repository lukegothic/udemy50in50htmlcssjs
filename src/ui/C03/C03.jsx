import React, { useState } from 'react'; 

import { CircleContainer, Circle, Container, Main, OpenButton, CloseButton, Navigation } from './C03.styled';

export const C03 = () => {
  const [menuShown, setMenuShow] = useState(false);

  return <Main>
    <Container menuShown={menuShown}>
      <CircleContainer>
          <Circle menuShown={menuShown}>
            <CloseButton onClick={() => setMenuShow(false)}>
              <i className="fas fa-times"></i>
            </CloseButton>
            <OpenButton onClick={() => setMenuShow(true)}>
              <i className="fas fa-bars"></i>
            </OpenButton>
          </Circle>
      </CircleContainer>
      <div className="content">
        <h1>Amazin Article</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum tincidunt sapien tempor tincidunt. Quisque mollis consequat lorem, eu semper magna pharetra sed. Morbi aliquam sit amet eros ut semper. Vestibulum tempor dui non ultrices gravida. Morbi pellentesque ex massa, eu auctor elit vestibulum quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dictum, nulla at interdum pulvinar, metus ante ultricies purus, id semper lacus nunc vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Nulla a dolor vel ipsum maximus sollicitudin. Maecenas turpis magna, pharetra gravida tempor id, viverra sit amet ante. Nulla placerat mattis erat, sit amet condimentum sem mattis gravida. Vivamus vel molestie nibh. Nulla efficitur tortor turpis. Nunc quis gravida sem, vulputate porta lacus. Curabitur eu sapien a elit tincidunt venenatis vitae vitae odio. Mauris pellentesque risus sapien, quis tempus dui eleifend ut. Morbi eleifend diam non luctus laoreet. Nullam id auctor ligula. Duis auctor massa ut nunc bibendum, nec auctor ex fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vehicula suscipit neque, a aliquam lacus ullamcorper in.
        </p>
        <h3>My Dog</h3>
        <img width={400} src="https://nationaltoday.com/wp-content/uploads/2020/02/doggy-date-night.jpg" alt="doggo" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam obcaecati officia quae similique in quidem deserunt omnis cumque eius sit deleniti facilis earum tenetur quasi incidunt, aperiam, error voluptatibus perferendis voluptates numquam saepe ab modi cupiditate. Tempore consectetur quas ad molestiae cumque unde dolores minima, iste itaque aperiam ab voluptatibus iusto nulla repellat error amet quo, tenetur, esse eius est aliquid nisi repellendus nihil. Libero aliquid, eveniet excepturi modi eos maiores magni distinctio cumque eaque!
        </p>
      </div>
    </Container>
      <Navigation menuShown={menuShown}>
        <ul>
          <li><i className="fas fa-home"></i> Home</li>
          <li><i className="fas fa-user-alt"></i> About</li>
          <li><i className="fas fa-envelope"></i> Contact</li>
        </ul>
        </Navigation>
  </Main>;

}