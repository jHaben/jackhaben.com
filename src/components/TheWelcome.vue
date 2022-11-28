<script setup>
import WelcomeItem from './WelcomeItem.vue'

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-brands fa-vuejs" size="xl" />
    </template>
    <template #heading>Vue.js</template>
    Vue is well documented. The
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>.


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-brands fa-js" size="xl" />
    </template>
    <template #heading>JS Calculator</template>

    A JavaScript based <a href="https://tsg121.org/donut" target="_blank" rel="noopener">Calculator</a> I made for
    a fundraiser.

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-brands fa-aws" size="xl" />
    </template>
    <template #heading>Cloud</template>
    <ul>
      <li> <a href="https://aws.amazon.com/elasticbeanstalk/" target="_blank" rel="noopener">Elastic Beanstalk</a></li>
      <li> <a href="https://aws.amazon.com/cloudfront/" target="_blank" rel="noopener">CloudFront</a></li>
      <li><a
          href="https://aws.amazon.com/pm/ec2/?trk=36c6da98-7b20-48fa-8225-4784bced9843&sc_channel=ps&s_kwcid=AL!4422!3!467723097970!e!!g!!aws%20ec2&ef_id=Cj0KCQiAsoycBhC6ARIsAPPbeLtEDTRMxztEhXdOefalOvWXCmhRueydIXJXOGv9eHRa2Az1Ap1VJgkaAn2nEALw_wcB:G:s&s_kwcid=AL!4422!3!467723097970!e!!g!!aws%20ec2"
          target="_blank" rel="noopener">EC2</a></li>

    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-brands fa-java" size="xl" />
    </template>
    <template #heading>JAVA</template>

    Spring Boot
    

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-database" />
    </template>
    <template #heading>Databases</template>

    Cloud Hosted MySQL 
  </WelcomeItem>
</template>
