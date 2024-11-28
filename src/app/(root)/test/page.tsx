"use client"

import { Button } from "@/components/ui/button";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";

const page = () => {


    const onSubmit = (data:any) => {
        
        console.log(data)
    }
  return (
    <section className="p-8">
        <h1 className="text-3xl font-bold">Form</h1>
      <JPForm onSubmit={onSubmit}>
        <JPInput placeholder="name 1" name="name"/>
        <JPInput placeholder="name 2" name="name1"/>
        <JPInput placeholder="name 3" name="name2"/>
        <JPInput placeholder="name 4" name="name3"/>
        <Button>Submit</Button>
      </JPForm>
    </section>
  );
};

export default page;