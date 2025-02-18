import Grid from '@mui/material/Grid2'
import { Card, Container } from '@mui/material'
import { Formulario } from './components/Formulario'
import { ListaTareas } from './components/ListaTareas'




function App() {
  
  return (
    <>
    <Container sx={{padding: '30px'}}>
    <Grid container spacing={2}>
        <Grid size={3} >
          <Card sx={{borderRadius: '12px', textAlign: 'center'}}>
            <Formulario/>
            <ListaTareas/>
          </Card>
        </Grid>
        <Grid size={3} >
          <Card sx={{borderRadius: '12px', textAlign: 'center'}}>
            <Formulario/>
            <ListaTareas/>
          </Card>
        </Grid>
        <Grid size={3} >
          <Card sx={{borderRadius: '12px', textAlign: 'center'}}>
            <Formulario/>
            <ListaTareas/>
          </Card>
          
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default App
