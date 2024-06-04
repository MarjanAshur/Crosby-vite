import React from 'react'
import StoryImage from '../assets/images/plant-textures-2.jpg'
const OurStory = () => {
  return (
    <main className='our-story'>
    <section className="our-storyOne">
       <h1>Our Story</h1>
    </section>
    <section className="our-storyTwo">
    <div className="our-story-content">
    <h2 className="lead">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </h2>
        <img className='our-story-img' src={StoryImage} alt="" />
        <p className='span'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
        <div className=' text'>
        <p>
        The following text is placeholder known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo, accumsan auctor orci lectus ac ipsum. Proin porta nisl sem, ac suscipit lorem dignissim et. Curabitur euismod nec augue vitae dictum. Nam mattis, massa quis consequat molestie, erat justo vulputate tortor, a sollicitudin turpis felis eget risus. Aliquam viverra urna felis, eu ornare enim consectetur sed. Morbi vitae ultrices velit. Sed molestie consectetur metus. Proin neque eros, dapibus ac accumsansodales sit.t.
        <br />
        <br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
        </p></div>
      </div>
    </section>
    </main>
  )
}

export default OurStory
