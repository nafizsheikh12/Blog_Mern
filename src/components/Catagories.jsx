import React from 'react'
import {Button, makeStyles, TableCell, TableHead, TableRow,Table,TableBody} from '@material-ui/core'
import {categories} from './constants/data'
import {Link} from 'react-router-dom'


 const useStyle = makeStyles({
   create: {  margin:20,
     background: '#6495ED',
     color: '#fff'
   },
   table: {
       border: '1px solid rgba(224,224,224,1)'
   }
 })

 const Catagories = () => {
     const classes = useStyle()
    return (
        <>
           <Link to='/create'> <Button variant='contained' className={classes.create}>Create Blog</Button> </Link>

           <Table className={classes.table}>
               <TableHead>
                   <TableRow>
                       <TableCell>All Catagories</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
                   {
                       categories.map(val => (
                           <TableRow>
                               <TableCell>{val}</TableCell>
                           </TableRow>
                       ))
                   }
               </TableBody>
           </Table>
        </>
    )
}

export default Catagories;