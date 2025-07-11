// Import necessary libraries and components
import { useState, useEffect } from 'react';

// Importing custom components
import DataTable from '../components/custom/datatable';

// Importing icons
import { MoveUp, MoveDown } from 'lucide-react';


// Show Announcement component
const ShowAnoun = () => {

    // State variables for announcements data
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');
    const [sort, setSort] = useState('asc');


    // Fetching announcements data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/get-all-announcements');
                const result = await response.json();
                setData(result);
                setOriginalData(result);
            } catch (error) {
                console.error("Error fetching announcements:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    // Filtering data based on search input
    useEffect(() => {
        const handler = setTimeout(() => {
            const data = value.toLowerCase().trim();

            if (data === '') {
                setData(originalData);
            } else {
                const filteredData = originalData.filter(item =>
                    item.title.toLowerCase().includes(data)
                );
                setData(filteredData);
            }
        }, 300);

        return () => clearTimeout(handler);
    }, [value, originalData]);


    // Function to handle search input change
    const handleSearch = (e) => {
        setValue(e.target.value);
    };

    // Function to handle sorting of announcements
    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => {
            if (sort === 'asc') {
                return new Date(a.created_at) - new Date(b.created_at); // Ascending
            } else {
                return new Date(b.created_at) - new Date(a.created_at); // Descending
            }
        });

        // Update the state with sorted data and toggle sort order
        setData(sortedData);

        setSort(sort === 'asc' ? 'desc' : 'asc'); // Toggle sort state
    };


    // Function to handle deletion of an announcement
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this announcement?")) {
            try {
                const response = await fetch(`http://localhost:5000/api/delete-announcement/${id}`, {
                    method: 'DELETE',
                });

                // Check if the response is ok
                if (response.ok) {
                    alert("Announcement deleted successfully!");
                    setData(data.filter(item => item.id !== id));
                } else {
                    alert("Failed to delete announcement.");
                }
            } catch (error) {
                console.error("Error deleting announcement:", error);
            }
        }
    };


    return (
        <div>
            {/* Page Title */}
            <h1 className='lg:text-4xl text-xl font-semibold mt-4 ml-2'>Company Announcements</h1>
            <div className='flex flex-col-reverse lg:flex-row mt-8 mr-8 justify-between lg:mt-4 lg:mr-24'>
                
                {/* Search Input */}
                <input
                    value={value}
                    type="text"
                    className='border border-gray-300 rounded p-2 lg:w-100 mb-4 lg:mt-12 mt-4 w-full'
                    placeholder='Search announcements by title...'
                    onChange={handleSearch}
                />

                {/* Sort Button */}
                <button onClick={handleSort} className='flex items-center border !py-2 px-6 rounded gap-1 lg:mt-8 cursor-pointer'>
                    Sort by Date {sort === 'asc' ? <MoveDown className="text-xs" /> : <MoveUp className='text-xs' />}
                </button>

            </div>

            {/* Displaying announcements data */}
            {/* If loading, show a loading message or if no data found, show a message */}
            {loading ? (
                <p>Loading...</p>
            ) : data.length === 0 ? (
                <p>No data found.</p>
            ) : (
                <div className='mt-4 lg:mr-24 lg:max-w-full max-w-[90%]'>
                    {/* DataTable component to display announcements */}
                    <DataTable data={data} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
};

export default ShowAnoun;
