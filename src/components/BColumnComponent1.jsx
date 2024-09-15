import React from 'react';
import './BColumnComponent1.css';

const BColumnComponent1 = () => {
    const audiobooks = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        audioUrl: 'https://ia801208.us.archive.org/33/items/slave_narratives_v_2312_librivox/slavenarrativesv5_01_various_64kb.mp3',
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        audioUrl: 'https://ia601208.us.archive.org/33/items/slave_narratives_v_2312_librivox/slavenarrativesv5_02_various_64kb.mp3',
      },
      // Add more audiobooks as needed
    ];

    return (
        <div className='audio_books_con'>
         <div className="head_aud"> <h2>Audiobooks</h2></div>
          <div className="audios_files">
          <ul>
            {audiobooks.map((audiobook, index) => (
              <li key={index}>
                <div className="aud">
                    <div className="aud_tit"><h3>{audiobook.title}</h3></div>
                    <div className="auth"><p>Author: {audiobook.author}</p></div>
                    <audio controls>
                      <source src={audiobook.audioUrl} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
      );
    };
    
    export default BColumnComponent1;
  