import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact", { replace: true });
  };
  return (
    <div>
      <header>
        About Page
        <button onClick={() => goToContact()}>Contact</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          elementum malesuada magna ac hendrerit. Maecenas fermentum, augue
          imperdiet fringilla congue, nibh massa euismod diam, eu tristique arcu
          odio ac lacus. Nullam accumsan elit semper lorem malesuada, ut tempor
          mauris sollicitudin. Aenean eu odio vel nisl viverra congue. Fusce
          laoreet blandit laoreet. Suspendisse vel maximus nunc, in congue ante.
          Ut dignissim sed quam sit amet consequat. Nam sit amet massa mollis,
          molestie nisi sed, ultrices purus. Nullam tortor leo, fringilla quis
          finibus id, facilisis sit amet ipsum. Curabitur molestie risus metus,
          ut laoreet mauris ornare in. Maecenas porta sagittis leo, at gravida
          velit. Donec vitae justo sed nibh bibendum suscipit. Sed aliquam eros
          non leo rutrum lacinia. In rutrum dolor at enim volutpat mattis. Duis
          efficitur nisi id est posuere, quis tempor massa eleifend. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Mauris pellentesque dictum erat accumsan suscipit. Ut placerat
          quam lectus, at interdum nisl gravida vitae. Nam a convallis arcu.
          Aliquam lectus est, finibus eget dui quis, hendrerit porttitor nisl.
          Integer vitae risus ante. Nunc nec quam ligula. Mauris pretium
          convallis semper. Pellentesque pulvinar orci rutrum metus finibus, eu
          aliquam urna fermentum. Pellentesque tristique efficitur justo eget
          malesuada. Mauris non neque semper, feugiat leo non, dignissim eros.
          Proin sem magna, sollicitudin vel mauris eget, vestibulum interdum
          purus. Nulla at arcu tortor. Quisque aliquet, mi nec suscipit
          lobortis, enim diam hendrerit quam, a vestibulum lorem lorem vel
          lorem. Vivamus sit amet enim eget elit luctus accumsan. Donec
          ultrices, mauris et tincidunt rhoncus, dui velit molestie metus, nec
          convallis tortor dui id ex. Nulla eu elit pharetra, pulvinar diam ut,
          eleifend metus. Cras laoreet tincidunt enim. Nulla efficitur dictum
          leo, vel lobortis augue venenatis quis. Morbi non sapien massa. Nam
          vitae vestibulum nunc. Nullam ornare cursus tincidunt. Ut ipsum
          turpis, congue at dolor id, auctor semper felis. Praesent et orci
          viverra, sollicitudin nibh id, hendrerit risus. Donec aliquam viverra
          metus id hendrerit. Sed at odio tellus. Praesent scelerisque dui est,
          vel mollis elit tincidunt et. Curabitur vitae ipsum at libero finibus
          congue vitae at nisl. Aliquam sed ultrices leo, at efficitur felis.
          Donec aliquam magna quis efficitur cursus. Praesent in tristique
          lectus. Suspendisse eu ultricies quam. Curabitur hendrerit commodo
          placerat. Ut tincidunt congue massa, ac ultrices ex interdum ac. Etiam
          sit amet scelerisque dui, eu hendrerit sem. Quisque at venenatis elit.
          Ut augue risus, luctus vel elementum accumsan, faucibus sed turpis.
          Nam sed finibus nisl. In condimentum ipsum vel elit dignissim porta.
          Cras risus enim, mollis in interdum non, vestibulum id dolor. Praesent
          tortor nulla, posuere eget lobortis sed, sagittis facilisis dolor.
          Aenean vehicula luctus tortor, ac fermentum sapien fringilla
          dignissim. Nulla tincidunt orci lectus, eu pharetra tortor maximus
          eget. Quisque tristique, diam quis sollicitudin malesuada, turpis enim
          cursus velit, eu ornare urna metus in ipsum. Aliquam non dolor lacus.
          In ex felis, rhoncus lobortis cursus eu, iaculis eget libero. Fusce
          vehicula, nunc ac feugiat commodo, purus quam porttitor lorem, ac
          efficitur massa quam et enim. Ut eget erat quis ipsum tincidunt
          consequat ac sit amet elit. Nullam pellentesque urna eu lorem iaculis
          sollicitudin. Duis et aliquet justo. Nulla sed est in mauris finibus
          vulputate eu at dolor. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Praesent ac vehicula dolor, quis tempor urna.
          Pellentesque nec convallis lectus. Etiam rhoncus ligula et commodo
          dapibus. Etiam a purus non purus dignissim tincidunt et et nisi.
          Vivamus id viverra nisl. Fusce nec vehicula tellus, ac euismod erat.
          Nulla sollicitudin vel risus non tristique. Pellentesque ultrices urna
          est, vitae sodales lectus ultrices vitae. Sed eget nunc et nibh
          porttitor porta a vel purus. Mauris nisl erat, interdum non vulputate
          non, vulputate vitae nulla. Integer pulvinar, mauris ut ornare
          blandit, velit eros commodo leo, nec euismod libero ante nec est. In
          cursus molestie leo ac vulputate. Proin sollicitudin varius lacinia.
          Proin venenatis mauris lobortis dui condimentum, gravida lobortis
          magna bibendum. Donec vel aliquet nisl. Mauris blandit accumsan
          varius. Pellentesque et mi non erat laoreet sollicitudin pellentesque
          ac magna. Sed sed varius quam. Curabitur luctus ligula non orci
          ultrices, vitae gravida nibh laoreet. Etiam in feugiat purus. Morbi a
          euismod libero. In tempor interdum elit et posuere. Aliquam
          sollicitudin, turpis vel scelerisque lacinia, enim est tempor augue,
          faucibus porttitor turpis magna sit amet tellus. Nulla porta quam non
          ex dictum gravida. Sed vel blandit neque. Ut sit amet ullamcorper
          libero, nec gravida erat. Cras et elit nulla. Curabitur sit amet velit
          nunc. Donec elit eros, ornare ac iaculis eget, dictum a mauris.
          Phasellus ut sodales ipsum. Vivamus eu velit pharetra massa vulputate
          laoreet. Vestibulum a lacinia purus. Phasellus in elit lacus.
          Suspendisse non eleifend ligula. Aliquam erat volutpat. Pellentesque
          cursus augue purus, eu convallis nulla interdum sed. Integer porta
          congue massa. Praesent laoreet tortor eget magna viverra congue.
          Curabitur consectetur, nunc nec euismod vulputate, urna felis posuere
          ipsum, nec lobortis tortor metus nec metus. Suspendisse nisl mi,
          posuere vel massa in, convallis commodo nulla. Proin non elementum
          risus. Nullam elementum cursus mi, quis blandit nunc vestibulum eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          rhoncus orci a congue pellentesque. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Vivamus a consectetur libero. Aenean
          commodo id eros eget tincidunt. Aenean elit neque, egestas vel nibh
          vitae, vestibulum rutrum tortor. Curabitur rutrum, turpis in rutrum
          vestibulum, ligula tortor posuere tellus, cursus tincidunt odio lacus
          sed est. Suspendisse vestibulum nibh ut tortor fringilla, ut tristique
          tortor blandit. Praesent erat lectus, lacinia vel condimentum sed,
          iaculis ac turpis. Aenean ornare sed lorem a sollicitudin. Aenean nibh
          turpis, suscipit a elit et, malesuada accumsan odio. Morbi eget ex
          nunc. Vivamus faucibus id elit non bibendum. In varius risus at elit
          porta lacinia. In fringilla, felis sit amet tincidunt condimentum, sem
          lacus dapibus odio, ac mattis sem turpis in risus. Vestibulum ut neque
          sapien. Mauris non orci eu urna blandit pulvinar et a nisl. Morbi
          malesuada augue eu pellentesque aliquam. Nam vel nunc facilisis,
          feugiat metus fringilla, cursus nibh. Mauris nec risus non mi varius
          rutrum. Maecenas et pretium nunc, fringilla vulputate lectus.
          Suspendisse lacinia iaculis varius. Vivamus et dolor ut nibh aliquam
          mollis quis quis tortor. Ut fermentum tortor id sollicitudin congue.
          Nunc sodales magna sit amet pharetra iaculis. Duis eu tortor eros.
          Etiam aliquet euismod nisi, nec rutrum justo iaculis non. In tincidunt
          ligula nisl, vitae pretium enim sagittis ac. Duis ullamcorper odio non
          augue mollis tincidunt. Aliquam dapibus lectus a massa euismod
          aliquam. Vivamus elementum diam id sagittis sodales. Donec lobortis
          velit ac nibh luctus imperdiet. Nunc eu tempor mi, quis lobortis eros.
          Sed varius fermentum dolor. Nulla non rutrum lectus, in ornare eros.
          Nulla varius eros suscipit, blandit magna tempor, pulvinar dui. In
          feugiat, metus sit amet sagittis scelerisque, sapien felis tempus
          orci, et cursus leo ipsum nec ipsum. Fusce sit amet accumsan turpis.
          Proin ac nunc quis dolor ornare maximus. Aliquam erat volutpat. Etiam
          eget tempus dolor. Suspendisse egestas nisi lectus, vel tincidunt odio
          tristique eu. Quisque eget gravida nulla. Aenean vel semper dui. Morbi
          suscipit a risus sit amet mattis. Donec porttitor, nisl in efficitur
          aliquet, mi ipsum efficitur sapien, eu interdum elit ipsum tempor
          tortor. Pellentesque diam purus, posuere sit amet tempus eu, convallis
          eu erat. Fusce euismod nulla non arcu tempus, at blandit massa
          iaculis. Donec nec metus quis urna efficitur pharetra ac vel nisl.
          Proin placerat metus eros, a blandit felis fringilla eu. Phasellus sit
          amet odio at erat blandit ullamcorper. Vivamus condimentum hendrerit
          consectetur. Praesent tellus ipsum, interdum nec ultricies sit amet,
          aliquet ut leo. Curabitur sed lobortis tellus. Donec erat justo,
          dictum ullamcorper lorem id, blandit faucibus metus. Proin imperdiet
          porta molestie. Vivamus sit amet justo quis tortor ultrices bibendum
          eu eget elit. Proin sed eros consequat, varius augue et, iaculis est.
          Integer mattis vel neque eget sollicitudin. Etiam lacinia congue
          ligula, in pulvinar ante bibendum id. Mauris a sapien convallis,
          tristique erat ut, eleifend tellus. Ut mattis, massa et semper
          consequat, urna quam commodo lacus, ac convallis orci augue eu neque.
          Vivamus quis nunc finibus, dapibus diam quis, egestas nibh. In quis
          porttitor arcu. Quisque vel ligula sed est malesuada tincidunt. Proin
          turpis quam, commodo vel vestibulum ac, lacinia eu libero. Nulla
          ultrices risus quis volutpat malesuada. Sed fermentum ante mauris, et
          accumsan risus dictum nec. Etiam id nisl sed eros volutpat porta.
          Phasellus bibendum dui quam, quis faucibus libero ullamcorper ut.
          Fusce eget lacus nec dolor pretium rhoncus. In tristique viverra est,
          sed tempus nibh malesuada et. Nulla dictum, arcu eget varius
          porttitor, lectus sapien sodales arcu, eu lacinia nibh nisl ut orci.
          Nam vel laoreet enim, sed lacinia mauris. Phasellus sit amet aliquam
          ligula. Fusce varius dignissim lectus, vitae fermentum nisi fermentum
          id. Morbi eros lacus, lobortis a velit eu, vulputate lacinia magna.
          Maecenas suscipit eros neque. Mauris facilisis ultricies dictum.
          Phasellus et euismod nunc. Curabitur dapibus accumsan neque. Etiam
          aliquam at dolor quis feugiat. Sed malesuada purus tincidunt rhoncus
          congue. Sed sed risus sed nulla semper blandit. In ac lacinia massa,
          sed ultricies turpis. Curabitur quis odio tellus. In tincidunt quam
          rutrum neque ullamcorper commodo. Nullam faucibus commodo augue eu
          dignissim. Nam risus eros, viverra eget nulla eu, volutpat ullamcorper
          enim. Vivamus molestie mauris quis leo suscipit venenatis. Nunc rutrum
          ex vel neque interdum, quis malesuada arcu condimentum. Nulla nec est
          pharetra, pellentesque lacus sit amet, laoreet mi. Integer viverra
          vehicula justo, at elementum orci elementum sit amet. Nullam ut nisi
          magna. Sed at fringilla nisl, id tincidunt nisl. Sed viverra enim at
          nisl interdum vulputate. Sed porttitor facilisis vestibulum. Ut
          finibus porttitor lorem, a venenatis diam pulvinar vitae. Etiam eu
          auctor ex. Fusce ultrices imperdiet leo, ultricies auctor elit tempus
          at. Nam purus lacus, porttitor nec fermentum non, congue in mauris. Ut
          faucibus velit vel purus tempus blandit. Ut molestie ipsum laoreet,
          vulputate nibh in, consectetur purus. Aliquam id purus id ligula
          feugiat eleifend. Etiam nisl orci, rutrum eu porta et, fringilla id
          nisl. Fusce a hendrerit nunc. Phasellus consequat enim id nisl
          consectetur lacinia. Morbi eget lectus convallis, auctor leo ut,
          posuere est. Duis lobortis, purus in placerat pulvinar, augue velit
          faucibus erat, non tincidunt odio elit quis ante. Duis suscipit augue
          quis magna consectetur tempus. Vivamus iaculis semper ante, et finibus
          lacus molestie eget. Aenean non commodo nunc. Praesent auctor, neque
          eget euismod pretium, felis dui varius dolor, eget imperdiet felis leo
          eget lacus. Pellentesque urna ante, viverra a sem at, mollis bibendum
          diam. Donec id molestie orci, sed varius arcu. Aenean vitae blandit
          enim. Phasellus id nibh nisl.
        </div>
      </header>
    </div>
  );
};

export default About;
