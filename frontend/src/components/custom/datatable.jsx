// Importing necessary components and libraries
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableHead
} from '@/components/ui/table';

// Importing icons and Link component
import { Trash, Pencil } from 'lucide-react';
import { Link } from 'react-router';
import CustomDialog from './CustomDialog';


// DataTable component to display announcements
const DataTable = ({ data, onDelete }) => {
    return (

        // Table structure to display announcements data
        <Table>
            <TableHeader>
                <TableRow className="bg-gray-200">
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell><CustomDialog item={item} /></TableCell>

                        {/* Rich text Description */}
                        <TableCell className="flex gap-1"><div dangerouslySetInnerHTML={{ __html: item.description }} className='max-w-72 line-clamp-1 text-ellipsis'></div>...</TableCell>
                        <TableCell>{item.category}</TableCell>

                        {/* Created At */}
                        <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
                        <TableCell className="flex gap-6">
                            <Link to={`/update-announcement/${item.id}`}><Pencil className='text-xs text-blue-700' /></Link>
                            <span onClick={() => onDelete(item.id)} className='cursor-pointer'><Trash className='text-xs text-red-700' /></span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


export default DataTable