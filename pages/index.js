import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { MeowiMenu, OrkutNostalgicIconSet } from '../src/lib/Commons';

function ProfileSideBar(props) {
  return (
    <Box>
      <img 
        src={`https://github.com/${props.img}.png`} 
        alt="Foto do perfil do gitHub"
        style={{borderRadius: '8px'}}
      />
    </Box>
  );
}

export default function Home() {
  const profileImg = 'anameloni';
  const bestFriends = ['anameloni','nTOMP', 'felipe-dias-wow', 'sahb']

  return (
    <>
      <MeowiMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea:'profileArea' }}>
          <ProfileSideBar img={profileImg}/>
        </div>
        <div className='welcomeArea' style={{ gridArea:'welcomeArea' }}>
          <Box >
            <h1 className='title'>
              Welcome
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className='profileRelationsArea' style={{ gridArea:'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Friends ({bestFriends.length})
            </h2>
            
            <ul>
              {bestFriends.map((friend) => {
                return (
                  <li>
                    <a href={`/users/${friend}`} key={friend}>
                      <ProfileSideBar img={friend}/>
                      <span>{friend}</span>
                    </a>
                  </li>              
                )})
              }
            </ul>
            
          </ProfileRelationsBoxWrapper>
          <Box>
            Community
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
