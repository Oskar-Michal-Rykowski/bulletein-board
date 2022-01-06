import React from "react";
import { shallow } from "enzyme";
import { PostComponent } from "./Post";

describe("Component Post", () => {
  const mockPosts = [
    {
      id: "1",
      title: "Sprzedam Passata",
      author: "Oskar",
      publicationDate: "Mar 12 2012 10:00:00 AM",
      actualizationDate: "Mar 12 2012 10:00:00 AM",
      status: "Closed",
      description:
        "Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.",
    },
    {
      id: "2",
      title: "Sprzedam Dom",
      author: "Tomasz Bodnar",
      publicationDate: "Mar 13 2013 10:00:00 AM",
      actualizationDate: "Mar 13 2013 10:00:00 AM",
      status: "Open",
      description:
        "Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.",
    },
    {
      id: "3",
      title: "Sprzedam Telefon",
      author: "Karlo Kowalski",
      publicationDate: "Mar 13 2012 10:00:00 AM",
      actualizationDate: "Mar 13 2012 10:00:00 AM",
      status: "Open",
      description:
        "Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.Piękny PASSAT CC z niespotykanym, bardzo bogatym wyposażeniem. Auto bardzo zadbane, wizualnie oraz mechanicznie w bardzo dobrym stanie. Przy przebiegu 150.000 km wymieniony kompletny rozrząd.",
    },
  ];
  const mockUser = {
    name: "Oskar",
    logged: true,
    position: "Admin",
  };
  it("should render without crashing", () => {
    const component = shallow(
      <PostComponent posts={mockPosts} user={mockUser} />
    );
    expect(component).toBeTruthy();
  });
});
