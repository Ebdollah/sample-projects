useEffect(()=>{
    const fetchMaterial = async()=> {
        try{
            // const q = query(collection(db, 'Courses'), where('courseId', '==', courseId));
            // const materialSnapshot = await getDoc(collection(db, 'Courses'))
            const materialSnapshot = await getDoc(collection(db, 'Courses', courseId))
            if (materialSnapshot.exists()) {
                // const materialData = materialSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMaterial({ id: materialSnapshot.id, ...materialSnapshot.data() });
                // setMaterial(materialData);
                // setLoading(false);
              }
            console.log(Material);
            // setExistingCourses(materialData);
        }
        catch(error){
            console.error('Error fetching material:', error);
            console.log('Error fetching material:' + error);
        }
    }
    if (courseId) {
        fetchMaterial();
      }
},[])