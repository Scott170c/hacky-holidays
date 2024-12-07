import {
    Box,
    Button,
    Image,
    Grid,
    Heading,
    Text,
  } from 'theme-ui';
  import dynamic from 'next/dynamic';

  const ModelViewer = dynamic(() => import('../ModelViewer'), { ssr: false });

 const tipitytopity = ()=> {
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection:['column','column', 'row'],
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          paddingRight: '3rem',
          width: '100%',
          margin: 'auto',

          mt: '15vh',
          textAlign: 'center',
          // height: '65vh'
        }}
        >
      {typeof window !== 'undefined' && <ModelViewer />}
      {/* 
          <Image 
              src="https://cloud-1mi3pnd3v-hack-club-bot.vercel.app/0image.png" 
              alt="Example PCB!" 
              style={{ width: '35%', height: '34%' }}
              sx={{
                width: '300px',
                height: '200px',
                // borderRadius: '16px',
                // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
          /> */}
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            // justifyContent: 'left',
            ml: ['0vw','2vw'],
            // mt: ['1%','12%'],
            maxWidth: '100%',
            textAlign: 'center'
          }}
          >
          <Heading as="h1" variant="styles.h1" 
                sx={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: '7rem', 
                  fontWeight:900,
                  textAlign: ['center','center','left'],
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                }}>
            Hacky Holidays
          </Heading>
          <Heading as="h2" variant="styles.h1" 
                sx={{ 
                  fontFamily: 'var(--font-inter)', 
                  fontSize: '2rem', 
                  fontWeight:900,
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                }}>
            Design a PCB holiday decoration <u><a style={{color:"#5297FF"}} href="https://google.com">this winter</a></u>, get a PCB grant!
          </Heading>
          <Button
          sx={{
            mx: ['auto',0],
            fontFamily: 'var(--font-inter)',
            fontSize: '1.5rem',
            fontWeight: 900,
            color: 'white',
            bg: '#f90b0b',
            width: 'fit-content',
            borderRadius: '2rem',
            padding: '1rem 2rem',
            mt: '1rem'
          }}>
              <b>Register Now!</b>
          </Button>


          </Box>
     
        </Box>
   

    )
}
export default tipitytopity;