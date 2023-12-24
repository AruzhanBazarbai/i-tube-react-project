import { Button, Img, P } from "../../atoms";

export const OfflinePage = () => (
  <section className="h-100 w-100 d-flex justify-content-center align-items-center mt-5 pt-5">
    <div className="w-50 d-flex flex-column justify-content-center align-items-center gap-3">
      <Img
        src={require("../../../assets/images/offline.jpg")}
        alt="offline mode"
        width="250px"
        height="250px"
        className="rounded-5"
      />
      <P fontSize="35px" fontWeight={500} lineHeight="42px">
        There is no internet connection
      </P>
      <P fontSize="25px" lineHeight="32px">
        Check your internet connection.
      </P>
      <Button
        onClick={() => window.location.reload()}
        backgroundColor="white"
        border="1px solid black"
        color="black"
        borderRadius="10px"
        className="w-50"
      >
        Retry
      </Button>
    </div>
  </section>
);
