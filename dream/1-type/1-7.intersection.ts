{
    /**
     * Intersection Types: &
     * 다양한 타입을 하나로 묶어서 사용
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }
    
    internWork({
        name: 'sujin',
        score: 1,
        employeeId: 123,
        work: () => {},
    });
}