import AlertBox from './AlertBox';

function App() {
  return (
    <div>
      <h1>AlertBox Demo</h1>
      <div className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, id ipsam.
        Quis quo nulla provident porro sunt placeat. Fugiat enim excepturi
        quibusdam similique, sit debitis voluptate aspernatur, hic numquam
        doloribus quae. Saepe iure labore ad, magni nesciunt sed voluptates
        inventore corrupti aspernatur ipsam incidunt velit quas pariatur
        voluptate ut, voluptatibus aut ea eaque atque blanditiis obcaecati
        expedita. Error, modi harum iusto maxime quam obcaecati velit deleniti
        maiores veniam saepe vel ut dolorum dolor fuga, odit optio eius
        possimus. Consectetur beatae expedita temporibus corrupti iusto
        perspiciatis earum, quo possimus nisi cum, modi, distinctio quidem ipsa
        officia numquam nemo accusantium mollitia ea adipisci voluptas maiores
        voluptatibus? Dolore vel rerum, voluptatum accusamus id aut harum sequi
        praesentium sapiente laudantium, neque minus error distinctio labore,
        voluptatem reiciendis sint repudiandae quis dolores aliquid? Repellendus
        exercitationem rerum in temporibus. Repellendus voluptate quo nostrum
        nulla laudantium voluptas enim corrupti rem et, minima repudiandae sed
        nobis officia neque possimus veritatis commodi quibusdam illum rerum
        eius nam amet tempora vel obcaecati! Ipsam facilis, cumque libero
        officia assumenda quisquam reiciendis autem animi unde. Et cum,
        laboriosam quaerat dolorem quasi aliquam natus. Non eius minima
        obcaecati accusamus blanditiis exercitationem quaerat beatae, itaque
        rerum amet architecto nihil nostrum, harum adipisci consectetur velit
        laboriosam fuga ex repellat qui ea? Minus a iste sequi totam ipsa saepe
        fugiat. Libero mollitia dicta molestias debitis et amet tempora ducimus
        quibusdam repellat dolores necessitatibus nesciunt quam dolorem eius
        veritatis temporibus rerum, hic repudiandae doloremque laborum magni
        minus. Cumque rem, laboriosam dolorum facilis at alias animi optio ex
        similique magni laudantium, omnis ipsa ipsum minima quod. Minima
        eligendi explicabo repellendus aspernatur maxime voluptatem aliquam
        pariatur labore animi laborum, ipsum hic reprehenderit asperiores, ipsa
        commodi facere dolorum corrupti minus omnis adipisci quis corporis
        officiis fugiat. Asperiores repellendus eveniet ab. Fugiat, iusto itaque
        possimus perspiciatis rerum illum sequi maiores fugit impedit odit
        tempora nesciunt et voluptatibus placeat veritatis reprehenderit, ut
        labore. Quas, perferendis minus. Praesentium eligendi hic ut
        repudiandae, odio saepe explicabo vitae asperiores nostrum laudantium
        ratione commodi eveniet nemo rem at obcaecati optio! Consequuntur
        veritatis voluptas vero corrupti magni ipsam dicta perferendis numquam
        neque facilis debitis omnis incidunt eveniet labore, aperiam tempore
        nulla veniam obcaecati molestias maiores facere excepturi praesentium,
        exercitationem aspernatur. Architecto, libero maiores! Cumque voluptatum
        sunt, vitae quia odit nam possimus nulla error quod. Rerum tempore
        veniam, voluptate quas at neque qui. Aliquid perferendis quibusdam
        dolores ut neque, ea nisi ratione quae. Obcaecati mollitia, culpa
        nesciunt debitis hic dignissimos possimus quod eveniet officiis amet.
        Autem eos et voluptate? Consequatur necessitatibus doloribus explicabo
        itaque in illo saepe dicta error fuga at minima similique vero tempora
        eaque officiis animi veniam non, molestiae optio voluptatum. Explicabo
        reprehenderit odio possimus voluptatum nemo ullam minima vitae non
        suscipit exercitationem praesentium enim porro quis, voluptatem cumque a
        obcaecati laborum vero perferendis temporibus amet quam voluptate
        nostrum! Illo, velit! Officia quae porro, reprehenderit obcaecati omnis
        commodi dolore expedita hic fugiat. Voluptatem at voluptates velit
        consequuntur quaerat. Eum, cum? Quas quaerat fugit officia ad obcaecati,
        dicta quo odit, repellat sunt, eveniet soluta recusandae facilis rerum!
      </div>
      <AlertBox
        message={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dicta consectetur quod perferendis eum dolor ipsa libero, eligendi maiores minus.'
        }
      />
      <AlertBox message={'Soem rubbish here'} variant='danger' />
      <AlertBox
        message={'Soem rubbish here'}
        variant='notification'
        autoClose={false}
      />
    </div>
  );
}

export default App;
