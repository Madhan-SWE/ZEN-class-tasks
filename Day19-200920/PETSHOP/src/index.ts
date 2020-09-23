type petType = "Dog" | "Cat" | "Parrot" | "Dove" | "Snake";

interface petDetails {
  petCategory: petType;
  petName: string;
  color: string;
  age: number;
  previousOwners: Array<string>;
}

interface requestInfo {
  queryList: Array<petType>;
}

class PetAvailability {
  petList: Array<petDetails>;

  constructor(petList?: Array<petDetails>) {
    this.petList = petList || [];
  }
  insert(petInfo: petDetails): void {
    console.log("------ Inserting pet: ------", petInfo);
    this.petList.push(petInfo);
    console.log("----------------------------");
  }
  checkAvailability(petCategory: petType): Array<petDetails> {
    return this.petList.filter((item) => item.petCategory === petCategory);
  }
}

class RequestPets {
  PetAvailabilityClass: PetAvailability;
  enquiryList: Array<requestInfo>;
  constructor(PetAvailabilityClassObj: PetAvailability) {
    this.PetAvailabilityClass = PetAvailabilityClassObj;
    this.enquiryList = [];
  }

  insert(reqInfo: requestInfo): void {
    console.log("======== Inserting query: ==========", reqInfo);
    this.enquiryList.push(reqInfo);
    console.log("====================================");
  }

  getAvailabilityFive() {
    for (let i = 0; i < 5; i++) {
      console.log("############### Enquiry no:", i + 1, " ###############");
      for (let j = 0; j < this.enquiryList[i].queryList.length; j++) {
        console.log("Query: ", this.enquiryList[i].queryList[j]);
        console.log(
          this.PetAvailabilityClass.checkAvailability(
            this.enquiryList[i].queryList[j]
          ).length === 0
            ? "Not Available"
            : "Available"
        );
      }
      console.log("##############################################");
    }
  }

  getAvailableCount(requestNo: number): void {
    console.log(
      "********** Get available count for query no : ",
      requestNo + 1,
      " **********"
    );
    for (let i = 0; i < this.enquiryList[requestNo].queryList.length; i++) {
      console.log("Count of ", this.enquiryList[requestNo].queryList[i], ":");
      console.log(
        this.PetAvailabilityClass.checkAvailability(
          this.enquiryList[requestNo].queryList[i]
        ).length
      );
    }
    console.log(
      "***************************************************************"
    );
  }

  mapMatchRequests(): void {
    console.log(
      "+++++++++++++++++++ No of incoming requests match with all queries ++++++++++++"
    );
    let total: number = 0;
    for (let i: number = 0; i < this.enquiryList.length; i++) {
      let res: boolean = this.enquiryList[i].queryList.every(
        (category) =>
          this.PetAvailabilityClass.checkAvailability(category).length > 0
      );

      console.log("Result for query no ", i + 1, "is :", res);
      if (res) total++;
    }
    console.log("No of incoming requests match with all queries :", total);
    console.log(
      "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
    );
  }
}

let petAvailabilityObj = new PetAvailability();


petAvailabilityObj.insert({
  petCategory: "Dog",
  petName: "Rachel",
  color: "Black",
  age: 10,
  previousOwners: ["madhan", "Arun"],
});
petAvailabilityObj.insert({
  petCategory: "Dog",
  petName: "RachelKumar",
  color: "Black",
  age: 10,
  previousOwners: ["madhan", "Arun"],
});
petAvailabilityObj.insert({
  petCategory: "Snake",
  petName: "Dommy",
  color: "Black",
  age: 10,
  previousOwners: ["madhan", "Arun"],
});
petAvailabilityObj.insert({
  petCategory: "Dove",
  petName: "Ramya",
  color: "Black",
  age: 10,
  previousOwners: ["madhan", "Arun"],
});
petAvailabilityObj.insert({
  petCategory: "Parrot",
  petName: "Rachelly",
  color: "Black",
  age: 10,
  previousOwners: ["madhan", "Arun"],
});
petAvailabilityObj.insert({
  petCategory: "Parrot",
  petName: "Dolly",
  color: "Black",
  age: 10,
  previousOwners: ["madhan", "Arun"],
});

let req = new RequestPets(petAvailabilityObj);

//insert enquiries
req.insert({ queryList: ["Dog", "Cat"] });
req.insert({ queryList: ["Dog", "Parrot"] });
req.insert({ queryList: ["Dog"] });
req.insert({ queryList: ["Dove", "Parrot"] });
req.insert({ queryList: ["Cat", "Parrot"] });
req.insert({ queryList: ["Dog", "Parrot", "Dove"] });

// check status of first five queries
req.getAvailabilityFive();

// Get availability count of requests

req.getAvailableCount(1);
req.getAvailableCount(0);
req.getAvailableCount(4);

//No of incoming requests matches with all queries

req.mapMatchRequests();
